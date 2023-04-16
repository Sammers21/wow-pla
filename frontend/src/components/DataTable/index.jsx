import React, {useCallback, useEffect, useState} from 'react';
import {useParams, useSearchParams} from 'react-router-dom';

import Table from '../Table';

import useColumns from './useColumns';
import {getStatistic} from '../../services/stats.service';
import {REGIONS} from '../../constants/region';
import {BRACKETS} from '../../constants/pvp-activity';

const DataList = () => {
  const {
    region = REGIONS.eu,
    activity = 'activity',
    bracket = BRACKETS.shuffle,
  } = useParams();

  let [searchParams, setSearchParams] = useSearchParams();
  var initSpecs = []
  if (searchParams.get('specs') != null){
    initSpecs = searchParams.get('specs').split(',');
  }
  const [contractors, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [specs, setSpecs] = useState(initSpecs);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const getDataFilter = useCallback(() => {
    return {page, region, activity, bracket, specs};
  }, [page, region, activity, bracket, specs]);

  const getData = async () => {
    setLoading(true);

    const filter = getDataFilter();
    const { records, totalPages } = await getStatistic(filter);

    setData(records);
    setTotalPages(totalPages);
    setLoading(false);
  };

  useEffect(() => {
    setPage(1);
  }, [region, activity, bracket]);

  useEffect(() => {
    getData();
  }, [page, region, activity, bracket, specs]);

  const columns = useColumns();

  return (
    <Table
      loading={loading}
      totalPages={totalPages}
      columns={columns}
      records={contractors}
      pagination
      page={page}
      onPageChange={handlePageChange}
      onSpecsChange={setSpecs}
    />
  );
};

export default DataList;
