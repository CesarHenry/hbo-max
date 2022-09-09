import { useRouter } from 'next/router';
import React from 'react';
import instance from '../../../services/api';
import requests, { api_key } from '../../../services/requests';

import * as Styled from './styles';

const StarPowerSelected = () => {
  const [star, setStar] = React.useState([]);
  const [person, setPerson] = React.useState([]);

  const router = useRouter();
  const { id, page } = router.query;
  const personsDetails = `/person/${id}/translations?api_key=${api_key}&language=en-US`;


  React.useEffect(() => {
    instance.get(requests[String(page)]).then((res) => {
      setStar(res.data.results);
    });
    instance.get(personsDetails).then((res) => {
      setPerson(res.data);
    });
  }, []);
  console.log('star', star);
  console.log('biografia', person);

  const filtered = star?.filter((item) => {
    return item.id === Number(id);
  });

  return <Styled.Wrapper>StarPowerSelected</Styled.Wrapper>;
};

export default StarPowerSelected;
