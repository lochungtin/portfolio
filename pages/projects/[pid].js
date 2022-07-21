import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { getProject } from '../api/firebase';
import Footer from '../components/footer';

import styles from '../../styles/detail.module.css';

const data = {
    order: 'r-t0s0f-',
    content: {

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

    const t = index => <p className={styles.t}>{data.content[index]}</p>

    const s = index => <p className={styles.s}>{data.content[index]}</p>

    const p = index => <p className={styles.p}>{data.content[index]}</p>

    const b = index => <p className={styles.b}><b>{data.content[index]}</b></p>

    const i = index => <Image
        src={data.content[index].href} alt='img'
        width={data.content[index].width} height={data.content[index].height}
    />

    const l = index => {
        return <div className={styles.lRoot}></div>
    }

    const d = (children, type) => {
        let style;
        switch (type) {
            case 'o':
                style = styles.o;
                break;
            case 'x':
                style = styles.x;
                break;
            case 'h':
                style = styles.h;
                break;
            default:
                style = styles.r;
        }

        return <div className={style}>{children}</div>
    }

    let tStack = new Array();
    let cStack = new Array();
    let index = -1;

    data.order.match(/../g).forEach(expression => {
        switch (expression[0]) {
            // open div handling
            case 'r':
            case 'o':
            case 'x':
            case 'h':
                tStack.push(expression[0]);
                cStack.push([]);
                index++;
                break;

            // close div handling
            case 'e':
                cStack[index--].push(d(cStack.pop(), tStack.pop()));
                break;
            case 'f':
                cStack[0].push(<Footer />);
                cStack[0] = d(cStack[0], 'r');
                break;

            // singleton element handling
            case 't':
                cStack[index].push(t(expression));
                break;
            case 's':
                cStack[index].push(s(expression));
                break;
            case 'p':
                cStack[index].push(p(expression));
                break;
            case 'b':
                cStack[index].push(b(expression));
                break;
            case 'i':
                cStack[index].push(i(expression));
                break;
            
            // unknown fragment handling
            default:
                cStack[index].push(<></>);
        }
    });

    return cStack[0];
}
