import React from "react";
import { Button } from "antd";
import { push } from "connected-react-router";
import { connect } from "react-redux";

function StudentAdd({ clickPush }) {
  return (
    <div>
      <h1>添加学生</h1>
      <Button
        onClick={() => {
          clickPush && clickPush();
        }}
      >
        跳转
      </Button>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  clickPush: () => {
    dispatch(push("/courses"));
  },
});

export default connect(null, mapDispatchToProps)(StudentAdd);
