import React from 'react';

import { Footer } from '../components/layout';
import { SearchTitle } from '../components/shared';

import Base from '../templates/Base';

const Search = () => {
  return (
    <Base title="Pesquisar Título">
      <SearchTitle />
      <Footer />
    </Base>
  );
};

export default Search;
