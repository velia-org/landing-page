"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef } from "react";
import type { MutableRefObject } from "react";

const vertexShader = `
varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const fragmentShader = `
uniform float uTime;
uniform vec2 uMouse;
varying vec2 vUv;
void main(){
  vec2 p = vUv;
  float d = distance(p, uMouse);
  float wave = sin(d * 54.0 - uTime * 3.0) * exp(-d * 9.0);
  float glow = smoothstep(.42, 0.0, d) * .10;
  vec3 base = vec3(0.025,0.012,0.020);
  vec3 wine = vec3(0.36,0.12,0.20);
  vec3 col = base + wine * (wave * .11 + glow);
  gl_FragColor = vec4(col, .95);
}`;

function RipplePlane() {
  const material = useRef<THREE.ShaderMaterial>(null);
  const { pointer, viewport } = useThree();
  useFrame(({ clock }) => {
    if (!material.current) return;
    material.current.uniforms.uTime.value = clock.elapsedTime;
    material.current.uniforms.uMouse.value.set(pointer.x * .5 + .5, pointer.y * .5 + .5);
  });
  const uniforms = useMemo(() => ({ uTime: { value: 0 }, uMouse: { value: new THREE.Vector2(.5,.5) } }), []);
  return (
    <mesh position={[0,0,-2]} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1,1,1,1]} />
      <shaderMaterial ref={material} transparent uniforms={uniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} />
    </mesh>
  );
}

function Stem({ x, height, bend, delay, bloom, revealRef }: { x:number; height:number; bend:number; delay:number; bloom:number; revealRef:MutableRefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  const stemGeo = useMemo(() => {
    const points = [
      new THREE.Vector3(0, -height/2, 0),
      new THREE.Vector3(bend*.15, -height*.15, 0),
      new THREE.Vector3(bend*.65, height*.18, 0),
      new THREE.Vector3(bend, height/2, 0),
    ];
    return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 28, .014, 7, false);
  }, [height,bend]);

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    const reveal = Math.max(0, Math.min(1, (revealRef.current - delay) / Math.max(.001, 1-delay)));
    const t = clock.elapsedTime;
    const worldX = x / 3.3;
    const proximity = Math.max(0, 1 - Math.abs(pointer.x - worldX) * 1.8);
    const sway = Math.sin(t*.72 + delay*8) * .035 + pointer.x * proximity * .055;
    group.current.scale.y += (reveal - group.current.scale.y) * .06;
    group.current.scale.x += (Math.max(.02,reveal) - group.current.scale.x) * .06;
    group.current.rotation.z += (sway - group.current.rotation.z) * .08;
  });

  const petalColor = bloom > .5 ? "#EBC7CD" : "#B9778C";
  return (
    <group ref={group} position={[x,-1.1,0]} scale={[.02,.02,.02]}>
      <mesh geometry={stemGeo}><meshBasicMaterial color="#91777f" transparent opacity={.82}/></mesh>
      <group position={[bend, height/2, .01]}>
        {Array.from({length:6}).map((_,i)=><mesh key={i} rotation={[0,0,(Math.PI*2/6)*i]} position={[Math.cos((Math.PI*2/6)*i)*.12,Math.sin((Math.PI*2/6)*i)*.12,0]} scale={[.15,.065,1]}><circleGeometry args={[1,24]}/><meshBasicMaterial color={petalColor} transparent opacity={.88}/></mesh>)}
        <mesh position={[0,0,.02]}><circleGeometry args={[.055,24]}/><meshBasicMaterial color="#F6EFE8"/></mesh>
      </group>
      <mesh position={[bend*.32,0,0]} rotation={[0,0,-.4]} scale={[.22,.06,1]}><circleGeometry args={[1,24]}/><meshBasicMaterial color="#6b5059" transparent opacity={.7}/></mesh>
    </group>
  );
}

function BotanicalWorld({ revealRef }: { revealRef: MutableRefObject<number> }) {
  const plants = useMemo(() => [
    [-2.9,2.55,.45,.12,.9],[-2.35,1.75,-.28,.22,.2],[-1.82,2.2,.34,.34,.8],[-1.15,1.55,-.24,.42,.1],[-.55,2.62,.19,.2,.75],[.15,1.72,-.2,.38,.15],[.75,2.45,.28,.3,.85],[1.43,1.78,-.3,.46,.2],[2.06,2.2,.2,.25,.75],[2.7,1.65,-.18,.4,.1],[3.1,2.5,.35,.16,.9]
  ], []);
  return <>{plants.map((p,i)=><Stem key={i} x={p[0]} height={p[1]} bend={p[2]} delay={p[3]} bloom={p[4]} revealRef={revealRef}/>)}</>;
}

export function BotanicalScene({ revealRef }: { revealRef: MutableRefObject<number> }) {
  return (
    <Canvas className="botanicalCanvas" orthographic camera={{ position:[0,0,6], zoom:115 }} dpr={[1,1.5]} gl={{ antialias:true, alpha:true }}>
      <RipplePlane/>
      <BotanicalWorld revealRef={revealRef}/>
    </Canvas>
  );
}
