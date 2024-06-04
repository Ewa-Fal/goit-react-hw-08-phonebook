import { Oval } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <Oval
      height={50}
      width={50}
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass={s.loader}
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};
export default Loader;