import React from 'react';
import styles from "./MyPageLinkMenuItems.module.css";

export type LinkMenuItem = {
    text: string
    to: string
}

type Props<T> = {
    listItems: T[];
    testId: string;
    ulClass: string;
    liClass: string;
    aClass: string;
}

// const list: LinkMenuItem[] = [
//     {text: "ホーム", to: "/"},
//     {text: "ログアウト", to: "/logout"},
//     {text: "注文履歴", to: "/orders"},
// ]
{/* <MyPageLinkMenuItems testId={''} listItems={list} ulClass={''} liClass={''} aClass={''}/> */}

const LinkMenuItems = React.memo(<T extends LinkMenuItem,>({testId, listItems}: Props<T>) => {

  return (
    <ul className={styles.ul}>
        {
            listItems.map((item: LinkMenuItem) => <li className={styles.li}><a data-test-id={testId} href={item.to}>{item.text}</a><span>＞</span></li>)
        }
    </ul>
  );
})

export default LinkMenuItems;