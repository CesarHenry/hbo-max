import React from 'react';
import { useRouter } from 'next/router';
import instance from '../../../services/api';
import requests from '../../../services/requests';
import { Container } from '../../../styles/Grid';
import { Input } from '../../core';

import * as Styled from './styles';

const SearchTitle = () => {
  const searchKey = 'pesquisa';
  const [movies, setMovies] = React.useState([]);
  const [search, setSearch] = React.useState<string>('');
  const [searchId, setSearchId] = React.useState();

  const router = useRouter();
  const { id } = router.query;

  const loadSearch = () => {
    const title = JSON.parse(localStorage.getItem(searchKey)) || [];
    setSearch(title);
  };

  React.useEffect(() => {
    setTimeout(() => {
      instance.get(requests.Popular).then((res) => {
        setMovies(res.data.results);
      });
    }, 200);
    loadSearch();
  }, []);

  function handleChange(event) {
    setSearch(event.target.value);
    localStorage.setItem(
      searchKey,
      JSON.stringify(event.target.value.toLowerCase())
    );
  }

  React.useEffect(() => {
    if (id) {
      instance.get(requests.Search + search).then((res) => {
        setSearchId(res.data.results);
      });
    }
  }, [id]);

  return (
    <Container>
      <Styled.Wrapper>
        <form action="/search">
          <Input
            name="id"
            type="text"
            label=""
            placeholder="O que você está procurando?"
            icon={<img src="images/icons/search.svg" alt="icon search" />}
            onChange={handleChange}
          />
          <button type="submit">submit</button>
        </form>

        <h1>Títulos mais procurados</h1>
        <div className="searching">
          {searchId ? (
            <>
              {searchId.map((value, index) => {
                return (
                  <ul>
                    <li key={index}>
                      {value.poster_path ? (
                        <img
                          src={`${requests.image_url}${value.poster_path} `}
                          alt={`card ${value.title}`}
                        />
                      ) : null}
                    </li>
                  </ul>
                );
              })}
            </>
          ) : (
            <>
              {movies.map((value, index) => {
                return (
                  <ul>
                    <li key={index}>
                      <img
                        src={`${requests.image_url}${value.poster_path} `}
                        alt={`card ${value.title}`}
                      />
                    </li>
                  </ul>
                );
              })}
            </>
          )}
        </div>
      </Styled.Wrapper>
    </Container>
  );
};

export default SearchTitle;
