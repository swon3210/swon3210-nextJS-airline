import styles from '../styles/Layout.module.css';
import Navigator from './Navigator';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navigator />
      <main className={styles['layout']}>{children}</main>;
    </>
  );
};

export default Layout;
