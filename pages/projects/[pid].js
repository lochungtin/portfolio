import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { getProject } from '../api/firebase';
import Footer from '../components/footer';

import styles from '../../styles/detail.module.css';

const data = {
    order: 't0s0b0h0o2p0e-o2p1e-e-l0',
    content: {
        t0: 'title',
        s0: 'subtitle',
        b0: 'bold text',
        p0: 'left',
        p1: 'right',
        l0: {
            '0': 'item0',
            '1': 'item1',
            '2': 'item2',
            '3': 'item3',
        },
    }
};

export default function ProjectDetail() {
    // const [data, setData] = useState({});
    // const [empty, setEmpty] = useState(true);
    // const router = useRouter();

    // const { pid } = router.query;

    // useEffect(() => {
    //     if (empty)
    //         getProject(pid).then(data => {
    //             setData(data);
    //             setEmpty(false);
    //         });
    // });

    // if (empty)
    //     return <div></div>

    const d = (children, type) => {
        return <div className={`${styles[type[0]]} ${styles[`m${type[1]}`]}`}>
            {children}
        </div>;
    }

    const p = index => {
        return <p className={styles[index[0]]}>
            {data.content[index]}
        </p>
    }

    const i = index => {
        return <Image
            src={data.content[index].href} alt='img'
            width={data.content[index].width} height={data.content[index].height}
        />;
    }

    const l = index => {
        return <div className={styles.lRoot}>
            {Object.entries(data.content[index]).map(([key, text]) =>
                <div className={styles.lRow} key={key}>
                    <div className={styles.lDot}></div>
                    <p className={styles.l}>
                        {text}
                    </p>
                </div>)}
        </div>
    }


    let tStack = new Array();
    let cStack = new Array([]);
    let index = 0;

    data.order.match(/../g).forEach(expression => {
        switch (expression[0]) {
            // open div handling
            case 'o':
            case 'x':
            case 'h':
                tStack.push(expression);
                cStack.push([]);
                index++;
                break;

            // close div handling
            case 'e':
                cStack[--index].push(d(cStack.pop(), tStack.pop()));
                break;

            // singleton element handling
            case 't':
            case 's':
            case 'p':
            case 'b':
                cStack[index].push(p(expression));
                break;
            case 'i':
                cStack[index].push(i(expression));
                break;
            case 'l':
                cStack[index].push(l(expression));

            // unknown fragment handling
            default:
                cStack[index].push(<></>);
        }
    });

    return d([d(cStack[0], 'm'), <Footer key={0} />], 'r');
}
