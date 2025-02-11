import { JSX } from 'react';
import { FaReact, FaNodeJs, FaDocker, FaDatabase, FaGoogle, FaAngular, FaHtml5 } from 'react-icons/fa';
import { SiGraphql, SiPostgresql } from 'react-icons/si';

export const techIcons: { [key: string]: JSX.Element } = {
    'React.js': <FaReact className="text-blue-500" />,
    'React Native': <FaReact className="text-blue-500" />,
    'Node.js': <FaNodeJs className="text-green-500" />,
    'GraphQL': <SiGraphql className="text-pink-500" />,
    'PostgreSQL': <SiPostgresql className="text-blue-700" />,
    'Docker': <FaDocker className="text-blue-400" />,
    'GCP': <FaDatabase className="text-orange-500" />, // 
    'google': <FaGoogle className="text-blue-500" />,
    'Angular': <FaAngular className="text-red-500" />,
    'HTML': <FaHtml5 className="text-red-500" />,
};
