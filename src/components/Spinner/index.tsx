import { type FC } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { Loading, LoadingText } from "./styles";

const Spinner: FC = () => {
  return (
    <>
      <Loading>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
        <LoadingText>Loading...</LoadingText>
      </Loading>
    </>
  );
};

export default Spinner;
