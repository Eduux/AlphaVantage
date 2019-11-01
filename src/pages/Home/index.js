import React, { useState } from 'react';
import { FaSearch, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import HeaderSection from '../../components/HeaderSection';
import CompanyList from '../../components/CompanyList';

import { Container, Form, SubmitButton } from './styles';

export default function Home() {
  const [company, setNewCompany] = useState('');
  const [loading, setLoading] = useState(0);
  const [companies, setCompanies] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (company.trim() && !loading) {
      setLoading(1);
      const { data } = await api.get(
        `?function=SYMBOL_SEARCH&keywords=${company}`,
      );
      setNewCompany('');
      setLoading(0);
      setCompanies(data);
    }
  };

  return (
    <>
      <HeaderSection text="Pesquise uma empresa" />
      <Container>
        <Form onSubmit={handleSubmit} data-testid="form-company">
          <input
            data-testid="form-input"
            type="text"
            onChange={(e) => setNewCompany(e.target.value)}
            placeholder="Pesquise pelo nome"
          />
          <SubmitButton loading={loading} data-testid="form-button">
            {loading ? (
              <FaSpinner color="#fff" size={14} />
            ) : (
              <FaSearch color="#fff" size={14} />
            )}
          </SubmitButton>
        </Form>
      </Container>

      {companies.bestMatches && (
        <CompanyList data-testid="company-list" list={companies.bestMatches} />
      )}
    </>
  );
}
