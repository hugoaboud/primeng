import sdk from '@stackblitz/sdk';
import { getAngularApp } from './templates';
import { Props } from './templates';

const useStackBlitz = (props: Props) => {

    const { files } = getAngularApp(props)

    let _files = {};
    Object.entries(files).forEach(([k, v]) => (_files[`${k}`] = typeof v.content === 'object' ? JSON.stringify(v.content, null, 2) : v.content));

    const project = {
        title: 'PrimeNG Demo',
        template: 'node',
        description:
            'PrimeNG is an open source UI library for Angular featuring a rich set of 90+ components, a theme designer, various theme alternatives such as Material, Bootstrap, Tailwind, premium templates and professional support. In addition, it integrates with PrimeBlock, which has 370+ ready to use UI blocks to build spectacular applications in no time.',
        files: _files
    };

    const options = {
        newWindow: true,
        openFile: 'src/app/app.component.html'
    };
    // @ts-ignore
    sdk.openProject(project, options)
};

export { useStackBlitz };
