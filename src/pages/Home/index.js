import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import HeaderSection from '../../components/Header-section/index';

import { Container, Form, SubmitButton } from './styles';

export default function Home() {
  const [company, setNewCompany] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (company) {
      console.log('vrau');
    }
  };

  return (
    <>
      <HeaderSection text="Pesquise uma empresa" />
      <Container>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setNewCompany(e.target.value)}
            placeholder="Pesquise pelo nome"
          />
          <SubmitButton>
            <FaSearch color="#fff" size={14} />
          </SubmitButton>
        </Form>
      </Container>
    </>
  );
}
