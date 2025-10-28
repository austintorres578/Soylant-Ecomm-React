import React, { useEffect, useState, useRef } from "react";

import "../../../assets/styles/parts/animatedInfo.css";

import soylentLogo from '../../../assets/images/parts/animatedSetion/soylent-logo.webp';

import redProduct from '../../../assets/images/parts/animatedSetion/Strawberry.webp'
import yellowProduct from '../../../assets/images/parts/animatedSetion/Banana.webp'
import brownProduct from '../../../assets/images/parts/animatedSetion/Chocolate_1017e0e6-3409-49ef-9eb8-342a34864a92.webp'
import greenProduct from '../../../assets/images/parts/animatedSetion/Mint.webp'
import blueProduct from '../../../assets/images/parts/animatedSetion/Vanilla.webp'

function AnimatedInfo() {
    const [AnimatedText, SetAnimatedText] = useState("Why Are We Perfect?");
    const [AnimationToggle, SetAnimationToggle] = useState(true);

    const animationToggleRef = useRef(AnimationToggle); // Ref to store AnimationToggle's value

    useEffect(() => {
        animationToggleRef.current = AnimationToggle; // Keep ref updated with the latest state
    }, [AnimationToggle]); // Update the ref whenever AnimationToggle changes

    useEffect(() => {
        const container = document.querySelector('.animated-info-con');
    
        const animateChildren = async () => {
            if (!container) return; // Prevent running if the container is not found
    
            if (animationToggleRef.current) {
                SetAnimationToggle(false);
    
                const coloredRow = document.querySelector('.colored-row') as HTMLElement;
                const coloredRowChildren = coloredRow.children as HTMLCollectionOf<HTMLElement>
                const animatedContent = document.querySelector('.animated-info-content') as HTMLElement;
                const animatedContentChildren = animatedContent.children as HTMLCollectionOf<HTMLElement>
    
                if (!coloredRow || !animatedContent) return; // Ensure elements exist before proceeding
    
                animatedContentChildren[0].style.opacity = "1";
                animatedContentChildren[0].classList.add("scale-up");
    
                // Animation logic with safety checks
                const delay = (ms:number) => new Promise((resolve) => setTimeout(resolve, ms));
    
                await delay(2500);
                if (!animatedContent.children[0]) return; // Prevent running if the component is unmounted
                animatedContentChildren[0].style.opacity = '0';
    
                await delay(1000);
                if (!coloredRow.children.length) return;
                for (const child of Array.from(coloredRow.children)) {
                    child.style.top = "85%";
                }
    
                await delay(500);
                SetAnimatedText("We are made of the perfect");
                animatedContentChildren[0].style.opacity = '1';
    
                animatedContent.children[0].classList.add("scale-up");
    
                await delay(1750);
                if (!animatedContent.children[0]) return;
                animatedContentChildren[0].classList.remove("scale-up");
                animatedContentChildren[0].style.opacity = '1';
    
                await delay(1000);
                SetAnimatedText("Synergy of Ingredients");
                animatedContentChildren[0].style.opacity = '1';
                animatedContentChildren[0].classList.add("scale-up");
    
                await delay(1750);
                if (!animatedContent.children[0]) return;
                animatedContent.children[0].classList.remove("scale-up");
                animatedContentChildren[0].style.opacity = '1';
    
                await delay(1000);
                SetAnimatedText("protein + slow carb burning + vitamins + healthy fats");
                animatedContentChildren[0].classList.add("scale-up");
                animatedContentChildren[0].style.opacity = '1';
    
                await delay(1750);
                if (!animatedContent.children[0]) return;
                animatedContentChildren[0].style.opacity = '1';
    
                await delay(1000);
                if (!coloredRow.children.length) return;
                for (const child of coloredRow.children) {
                    child.style.top = "-85%";
                }
    
                await delay(500);
                SetAnimatedText("Science Backed Nutrition");
                animatedContentChildren[0].classList.add("scale-up");
                animatedContentChildren[0].style.opacity = '1';
    
                await delay(2500);
                const newSpeeds = [0.5, 0.7, 0.9, 1.1, 1.4];
                for (let i = 0; i < coloredRow.children.length; i++) {
                    if (!coloredRow.children[i]) return;
                    coloredRow.children[i].style.transition = `${newSpeeds[i]}s`;
                }
    
                animatedContentChildren[0].style.opacity = '1';
    
                for (let i = 0; i < coloredRow.children.length; i++) {
                    if (!coloredRow.children[i] || !coloredRow.children[i].children[0]) return;
                    coloredRowChildren[i].style.top = "-55%";
                    coloredRow.children[i].children[0].style.opacity = "1";
                }
    
                await delay(2500);
                const resetSpeeds = [1, 1.25, 1.5, 1.75, 2];
                for (let i = 0; i < coloredRow.children.length; i++) {
                    if (!coloredRow.children[i]) return;
                    coloredRow.children[i].style.transition = `${resetSpeeds[i]}s`;
                }
    
                for (const child of coloredRow.children) {
                    if (!child) return;
                    child.style.top = "300%";
                }
    
                if (!animatedContent.children[0]) return;
                animatedContentChildren[0].classList.remove("scale-up");
                animatedContentChildren[0].style.opacity = '1';
    
                await delay(1000);
                const animatedCTA = document.querySelector('.animated-content-cta') as HTMLElement;
                if (!animatedCTA) return;
                animatedCTA.style.opacity = '1';
                animatedCTA.style.zIndex = '10';
    
                
            } else {
                console.log("Animation is already running.");
            }
        };
    
        if (container) {
            container.addEventListener('click', animateChildren);
        }
    
        return () => {
            if (container) {
                container.removeEventListener('click', animateChildren);
            }
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount
    

    useEffect(() => {
        // Set up the IntersectionObserver
        const target = document.querySelector('.animated-info-con');

        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    target.click(); // Trigger click on the element
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, {
            root: null, // Default to viewport
            threshold: 0.1, // Trigger when 10% of the element is visible
        });

        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) {
                observer.unobserve(target);
            }
        };
    }, []); // Runs only once on component mount

    return (
        <section className="animated-info-con">
            <div className="colored-row">
                <div className="red">
                    <img src={redProduct}></img>
                </div>
                <div className="yellow">
                    <img src={yellowProduct}></img>
                </div>
                <div className="brown">
                    <img src={brownProduct}></img>
                </div>
                <div className="green">
                    <img src={greenProduct}></img>
                </div>
                <div className="blue">
                    <img src={blueProduct}></img>
                </div>
            </div>
            <div className="animated-info-content">
                <h1>{AnimatedText}</h1>
                <div className="animated-content-cta">
                    <img src={soylentLogo} alt="Soylent Logo"></img>
                    <h2>The World's Most Perfect Food</h2>
                    <div>
                        <button>Learn More</button>
                        <button>Shop All</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AnimatedInfo;
