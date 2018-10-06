import React from 'react';
import dynamic from 'next/dynamic';
import * as monaco from '@timkendrick/monaco-editor/dist/external';

let MorphismPlayground: any = dynamic(import('../components/MorphismPlayground') as any, { ssr: false });

export default () => <MorphismPlayground />;
