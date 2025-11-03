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
  const container = document.querySelector<HTMLDivElement>('.animated-info-con');

  const delay = (ms: number) => new Promise<void>(res => setTimeout(res, ms));

  const animateChildren = async () => {
    if (!container) return;

    if (animationToggleRef.current) {
      SetAnimationToggle(false);

      // Narrow with generics so we get HTMLElement, not Element
      const coloredRow = document.querySelector<HTMLElement>('.colored-row');
      const animatedContent = document.querySelector<HTMLElement>('.animated-info-content');

      if (!coloredRow || !animatedContent) return;

      // Turn live HTMLCollections into arrays of HTMLElements
      const coloredRowChildren = Array.from(coloredRow.children) as HTMLElement[];
      const animatedContentChildren = Array.from(animatedContent.children) as HTMLElement[];

      const firstAnimated = animatedContentChildren[0];
      if (!firstAnimated) return;

      firstAnimated.style.opacity = '1';
      firstAnimated.classList.add('scale-up');

      await delay(2500);
      if (!animatedContentChildren[0]) return;
      animatedContentChildren[0].style.opacity = '0';

      await delay(1000);
      if (!coloredRowChildren.length) return;
      for (const child of coloredRowChildren) {
        child.style.top = '85%';
      }

      await delay(500);
      SetAnimatedText('We are made of the perfect');
      if (!animatedContentChildren[0]) return;
      animatedContentChildren[0].style.opacity = '1';
      animatedContentChildren[0].classList.add('scale-up');

      await delay(1750);
      if (!animatedContentChildren[0]) return;
      animatedContentChildren[0].classList.remove('scale-up');
      animatedContentChildren[0].style.opacity = '1';

      await delay(1000);
      SetAnimatedText('Synergy of Ingredients');
      if (!animatedContentChildren[0]) return;
      animatedContentChildren[0].style.opacity = '1';
      animatedContentChildren[0].classList.add('scale-up');

      await delay(1750);
      if (!animatedContentChildren[0]) return;
      animatedContentChildren[0].classList.remove('scale-up');
      animatedContentChildren[0].style.opacity = '1';

      await delay(1000);
      SetAnimatedText('protein + slow carb burning + vitamins + healthy fats');
      if (!animatedContentChildren[0]) return;
      animatedContentChildren[0].classList.add('scale-up');
      animatedContentChildren[0].style.opacity = '1';

      await delay(1750);
      if (!animatedContentChildren[0]) return;
      animatedContentChildren[0].style.opacity = '1';

      await delay(1000);
      if (!coloredRowChildren.length) return;
      for (const child of coloredRowChildren) {
        child.style.top = '-85%';
      }

      await delay(500);
      SetAnimatedText('Science Backed Nutrition');
      if (!animatedContentChildren[0]) return;
      animatedContentChildren[0].classList.add('scale-up');
      animatedContentChildren[0].style.opacity = '1';

      await delay(2500);
      const newSpeeds = [0.5, 0.7, 0.9, 1.1, 1.4];
      for (let i = 0; i < coloredRowChildren.length; i++) {
        const child = coloredRowChildren[i];
        if (!child) return;
        child.style.transition = `${newSpeeds[i] ?? 1}s`;
      }

      if (!animatedContentChildren[0]) return;
      animatedContentChildren[0].style.opacity = '1';

      for (let i = 0; i < coloredRowChildren.length; i++) {
        const rowChild = coloredRowChildren[i];
        if (!rowChild) return;

        rowChild.style.top = '-55%';

        // Safely narrow the nested first child to HTMLElement before using style
        const inner = rowChild.children[0] as HTMLElement | undefined;
        if (inner) inner.style.opacity = '1';
      }

      await delay(2500);
      const resetSpeeds = [1, 1.25, 1.5, 1.75, 2];
      for (let i = 0; i < coloredRowChildren.length; i++) {
        const child = coloredRowChildren[i];
        if (!child) return;
        child.style.transition = `${resetSpeeds[i] ?? 1}s`;
      }

      for (const child of coloredRowChildren) {
        child.style.top = '300%';
      }

      if (!animatedContentChildren[0]) return;
      animatedContentChildren[0].classList.remove('scale-up');
      animatedContentChildren[0].style.opacity = '1';

      await delay(1000);
      const animatedCTA = document.querySelector<HTMLElement>('.animated-content-cta');
      if (!animatedCTA) return;
      animatedCTA.style.opacity = '1';
      animatedCTA.style.zIndex = '10';
    } else {
      console.log('Animation is already running.');
    }
  };

  container?.addEventListener('click', animateChildren);
  return () => container?.removeEventListener('click', animateChildren);
}, []);


    useEffect(() => {
        // Set up the IntersectionObserver
        const target = document.querySelector('.animated-info-con');

     const handleIntersect = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            const target = entry.target; // This is an Element
            if (entry.isIntersecting && target instanceof HTMLElement) {
            target.click(); // Safe: HTMLElement has .click()
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
