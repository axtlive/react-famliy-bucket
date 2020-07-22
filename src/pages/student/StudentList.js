import React, { useState, useEffect } from 'react';
import qs from 'query-string';
import StudentSearchBar from '../../components/StudentSearchBar';
import StudentTable from '../../components/StudentTable';
import { searchStudents, searchStudentsCount } from '../../services/student';
import Pager from '../../components/common/Pager/Pager';

import './index.css';

/**
 * @description:  获取地址栏参数中提供的查询条件,返回一个对象 通过条件再地址中确实，会使用默认值
 * @param {type}  search
 * @return:object
 */
function getQuery(search) {
  const queryDefault = {
    page: 1,
    limit: 10,
    key: '',
    sex: -1
  }
  let query = qs.parse(search);
  query = Object.assign({}, queryDefault, query);
  // 地址栏获取的是字符串，用+转一下数字
  query.limit = +query.limit;
  query.page = +query.page;
  query.sex = +query.sex;
  return query;
}

/**
 * @description: 获取服务器的相应结果
 * @param {type} query
 * @return: object
 */
function useResp(query) {
  const [resp, setResp] = useState({
    data: [],
  });
  const [count, setCount] = useState(0);
  useEffect(() => {
    searchStudents({
      key: query.key,
      limit: query.limit,
      sex: query.sex,
      page: query.page
    }).then(res => {
      setResp(res)
    })
    searchStudentsCount({ key: query.key, sex: query.sex }).then(res => { setCount(res) })
  }, [query.key, query.limit, query.sex, query.page])
  return { resp, count };
}

/**
 * @description: 根据条件对象，改变浏览器地址栏
 * @param {type} query history
 * @return: 
 */
function changeLocation(newQuery, history) {
  console.log(newQuery);
  const search = qs.stringify(newQuery)
  history.push("?" + search)
}

export default function StudentList(props) {

  const query = getQuery(props.location.search)
  const result = useResp(query);

  return (
    <div className="main-content">
      <StudentSearchBar
        defaultValue={{
          key: query.key,
          sex: query.sex
        }}
        onSearch={item => {
          console.log(item);
          const newQuery = {
            ...query,
            page: 1,
            key: item.key,
            sex: item.sex,
          }
          changeLocation(newQuery, props.history)
        }}
      />
      <StudentTable stus={result.resp.data} />
      <div className="pager">
        <Pager
          current={query.page}
          total={result.count.total}
          limit={query.limit}
          panelNumber={5}
          onPageChange={newPage => {
            const newQuery = {
              ...query,
              page: newPage
            }
            changeLocation(newQuery, props.history)
          }}
        />
      </div>
    </div>
  )
}
