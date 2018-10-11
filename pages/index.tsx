import React from 'react';
import dynamic from 'next/dynamic';
let MorphismPlayground: any = dynamic(import('../src/components/MorphismPlayground') as any, { ssr: false });

export default () => <MorphismPlayground />;
