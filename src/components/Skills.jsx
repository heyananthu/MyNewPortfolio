import React from 'react';
import Lottie from 'lottie-react';
import Skillone from './assets/skillone.json';
import { TiHtml5 } from "react-icons/ti";
import { DiCss3, DiNpm } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import { FaBootstrap, FaJava, FaReact, FaNode } from "react-icons/fa6";
import { TbBrandTailwind, TbBrandFramerMotion, TbBrandMongodb, TbBackground } from "react-icons/tb";
import { IoLogoNodejs}  from "react-icons/io5";
import { ImAndroid } from "react-icons/im";
import { GrMysql } from "react-icons/gr";
import { SiRedhat } from "react-icons/si";
import { color, motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames'

const IconWithAnimation = ({ IconComponent, color }) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5
    });

    return (
        <motion.div
            ref={ref}
            initial={{ scale: 1 }}
            animate={inView ? { rotate: 360, scale: 1 } : { scale: 0 }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 30
            }}
            className={classNames('text',color)}
        >
            <IconComponent size={100} />
        </motion.div>
    );
};

const Skills = () => {
    const icons = [
        { component: TiHtml5, color: 'text-orange-500' },
        { component: DiCss3, color: 'text-cyan-500' },
        { component: RiJavascriptFill, color: 'text-yellow-500' },
        { component: FaBootstrap, color: 'text-violet-500' },
        { component: TbBrandTailwind, color: 'text-cyan-500' },
        { component: DiNpm, color: 'text-red-800' },
        { component: FaJava, color: 'text-orange-500' },
        { component: FaReact, color: 'text-cyan-400' },
        { component: IoLogoNodejs, color: 'text-green-600' },
        { component: TbBrandFramerMotion, color: 'text-cyan-400' },
        { component: ImAndroid, color: 'text-green-600' },
        { component: GrMysql, color: 'text-blue-500' },
        { component: TbBrandMongodb, color: 'text-green-800' },
        { component: FaNode, color: 'text-green-600' },
        { component: SiRedhat, color: 'text-red-500' }
    ];

    return (
        <div>
            <h1 className='font-black text-6xl mt-16 text-center text-cyan-500'>Skills <span className='text-white'>&</span> Tools</h1>
            <div>
                {/* <div>
                    <Lottie className='w-80 ml-16 mt-20' animationData={Skillone} />
                </div> */}
                <div className='mt-20 ml-2 sm:ml-60 sm:gap-4 grid grid-cols-3 gap-7 text-white'>
                    {icons.map((icon, index) => (
                        <IconWithAnimation
                            key={index}
                            IconComponent={icon.component}
                            color={icon.color}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
