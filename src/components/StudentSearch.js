import React from "react";
import StudentSearchBar from "./StudentSearchBar";
import { connect } from "../react-redux";
import { changeAction } from "../store/action/student/searchCondition";
import { fetchStudent } from "../store/action/student/searchResult";
import StudentTable from "./StudentTable";
import Pager from "./common/Pager/Pager";

let mapStateToProps = state => ({
  defaultValue: {
    key: state.students.searchCondition.key,
    sex: state.students.searchCondition.sex,
  },
});

let mapDispatchToProps = dispatch => ({
  onSearch: newCondition => {
    // 查询条件变更，条件页码改回1
    newCondition = {
      ...newCondition,
      page: 1,
    };
    dispatch(changeAction(newCondition));
    // 触发获取学生数据的action
    dispatch(fetchStudent());
  },
});

const SearchBar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StudentSearchBar);

// 连接StudentTable;
mapStateToProps = state => ({
  stus: state.students.searchResult.arr,
});
const StuTable = connect(mapStateToProps)(StudentTable);

// 连接Pager
mapStateToProps = state => ({
  current: state.students.searchCondition.page,
  total: state.students.searchResult.arr.total,
  limit: state.students.searchCondition.limit,
  panelNumber: 3,
});
mapDispatchToProps = dispatch => ({
  onPageChange: newPage => {
    // 触发change改变页码
    dispatch(changeAction(newPage));
    // 然后再次触发获取学生数据的action
    dispatch(fetchStudent());
  },
});
const PagerTemp = connect(mapStateToProps, mapDispatchToProps)(Pager);

export default function StudentSearch() {
  return (
    <>
      <SearchBar />
      <StuTable />
      <PagerTemp />
    </>
  );
}
