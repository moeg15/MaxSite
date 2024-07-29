import './home.css';
import React, { useEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default function Home() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Intersection Observer setup
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Create the Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    let object;
    let controls;
    const objToRender = 'thing'; // Change this to load different models
    const loader = new GLTFLoader();

    loader.load(
      `../../${objToRender}/head.gltf`,
      (gltf) => {
        object = gltf.scene;
        object.scale.set(10, 10, 10);
        scene.add(object);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.error(error);
      }
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth * 0.5, window.innerHeight); // Set size to 50% width
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = objToRender === 'dino' ? 25 : 500;

    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(500, 500, 500);
    topLight.castShadow = true;
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x333333, objToRender === 'dino' ? 5 : 1);
    scene.add(ambientLight);

    if (objToRender === 'dino') {
      controls = new OrbitControls(camera, renderer.domElement);
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const animate = () => {
      requestAnimationFrame(animate);

      if (object && objToRender === 'thing') {
        object.rotation.y = -3 + mouseX / window.innerWidth * 3;
        object.rotation.x = -1.2 + mouseY * 2.5 / window.innerHeight;
      }
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth * 0.5, window.innerHeight);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousemove', handleMouseMove);

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <>
      <div className="acting">
        <video autoPlay muted loop id="myVideo">
          <source src="../../homevid.mp4" type="video/mp4" />
        </video>
        <div className="text-overlay">
          <h1 className='glow'>Max</h1>
          <p className='glow'>Transforming characters with effortless charisma, brining depth and nuance to every role, captivating audiences with every performance</p>
        </div>
      </div>

      <Container>
        <Row className='black'>
          <Col className='left-half'>
            <div className='container3D' ref={containerRef}></div>
          </Col>
          <Col className={`right-half ${isVisible ? 'visible' : 'hidden'}`} ref={textRef}>
            <h1>about</h1>
            <p>With a commanding presence and an innate ability to dive into complex roles, [Actor's Name] consistently delivers performances that resonate deeply with audiences. Their versatility allows them to effortlessly transition between genres, bringing authenticity and emotion to each character. Whether on stage or screen, max captivates with a magnetic blend of talent and charisma that leaves a lasting impression.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
