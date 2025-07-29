import { useContext, type FC } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { Loading, LoadingText } from "./styles";
import { ThemeContext } from "../../ThemeContext";

const Spinner: FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <Loading>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      <LoadingText theme={theme}>Loading...</LoadingText>
    </Loading>
  );
};

export default Spinner;
