import { FC, ReactNode, useEffect, useRef, useState } from "react";
import styles from "./Accordion.module.css";

type Props = {
  title: string;
  withIcon?: boolean;
  children?: ReactNode;
};

// https://nishinatoshiharu.com/react-accordion/
export const Accordion: FC<Props> = ({ title, withIcon, children }) => {
  const childElement = useRef<HTMLDivElement>(null);
  const [showChildren, setshowChildren] = useState(false);
  const [childHeight, setChildHeight] = useState(0);
  const [reverseIcon, setReverseIcon] = useState(false);

  useEffect(() => {
    if (childElement.current) {
      const height = childElement.current?.clientHeight;
      setChildHeight(height);
    }
  }, []);

  const handleClick = () => {
    if (childElement.current) {
      setshowChildren(!showChildren);
    }
    setReverseIcon(!reverseIcon);
  };

  return (
    <>
      <div onClick={handleClick} className={styles.item}>
        {title}
        {
          <div className={`${styles.icon} ${reverseIcon && styles.reverse}`}>
            
          </div>
        }
      </div>
      <div
        className={styles.childItem}
        style={{
          height: children && showChildren ? `${childHeight}px` : "0px",
          opacity: children && showChildren ? 1 : 0
        }}
      >
        <div ref={childElement}>{children}</div>
      </div>
    </>
  );
};
