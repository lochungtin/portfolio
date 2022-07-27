import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { getProject } from '../api/firebase';
import Footer from '../components/footer';

import styles from '../../styles/detail.module.css';
import Head from 'next/head';

const data = {
    order: 'n0 a0 t0 s0 p0 s1 p1 s2 p2 h4 x1 b0 p3 e- x1 b1 p4 l0 e- x1 b2 p5 e- e- s3 p6 l1 s4 p7 t1 p8',
    content: {
        n0: 'CoinControl',
        t0: 'Features',
        t1: 'Future Plans',
        s0: 'Records',
        s1: 'Account System',
        s2: 'Customisation',
        b0: 'Custom Themes',
        b1: 'Currency Labels',
        b2: 'Categories',
        s3: 'Data Management',
        s4: 'Notifications',
        a0: `CoinControl is a mobile money management application with an account system, cloud storage/backups, record analytics, and also a built-in calculator as the input number pad for recording expenses and incomes.`,
        p0: `Records are classified by category, which can have custom icons, colour, and names. Custom categories can be added by users, existing categories can also be customised to the user's liking.`,
        p1: `Accounts can be set up in the app, which can be used to store data on the cloud store. Though the app itself can be used without an account. Account authentication is managed by Firebase Authentication.`,
        p2: `The app provides a wide range of customisability. Which includes customs themes, categories, and currency labels.`,
        p3: `With a custom colour picker, users can choose from 30 different flat design colours and customise their app's accent. Light mode is also a togglable option in the settings.`,
        p4: `Users can select their currency label for their spending records, which include:`,
        p5: `Users can select from various icons to create their own custom categories to label their spendings and incomes. Each category is stylable with the 30 custom colours provided by the colour picker.`,
        p6: `Data is stored both locally and on the cloud via Firebase's Realtime Database System. Data syncing can be done with a press of a button. Syncing methods include`,
        p7: `Notifications can be set to remind users to record and update their expenses daily. While the notification's default firing time is at 11:00PM local time, they can be customised to fit the user's personal schedule.`,
        p8: `Some next steps I have in mind are creating a web application for CoinControl, so data can be accessed and updated on the computer as well, which will improve accessibility and ease of use.`,
        l0: {
            '0': 'USD',
            '1': 'GBP',
            '2': 'EUR',
            '3': 'HKD',
            '4': 'NTD',
            '5': 'JPY',
            '6': 'KRW',
        },
        l1: {
            '0': 'Select Latest (default option)',
            '1': 'Cloud Overwrite Local',
            '2': 'Local OVerwrite Cloud',
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
        return <div className={`${styles[`m${type[1]}`]} ${styles[type[0]]}`}>
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

    data.order.replace(/ /g, '').match(/../g).forEach(expression => {
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
            case 'n':
                cStack[index].push((
                    <Head>
                        <title>{data.content.n0}</title>
                        <link rel="icon" href='/logo/favicon.ico' />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    </Head>
                ));
            case 't':
            case 's':
            case 'a':
            case 'p':
            case 'b':
                cStack[index].push(p(expression));
                break;
            case 'i':
                cStack[index].push(i(expression));
                break;
            case 'l':
                cStack[index].push(l(expression));
                break;

            // unknown fragment handling
            default:
                cStack[index].push(<></>);
        }
    });

    return d([d(cStack[0], 'm'), <Footer key={0} />], 'r');
}
