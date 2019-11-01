import React, { useState, useCallback } from 'react';
import { FaSearch, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import HeaderSection from '../../components/HeaderSection';
import CompanyList from '../../components/CompanyList';

import { Container, Form, SubmitButton } from './styles';

export default function Home() {
  const [company, setNewCompany] = useState('');
  const [loading, setLoading] = useState(0);
  const [companies, setCompanies] = useState([]);

  const handleSubmit = useCallback(
    async (e) => {
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
    },
    [company, loading],
  );

  return (
    <>
      <HeaderSection text="Search for a company" />
      <Container>
        <Form onSubmit={handleSubmit}>
          <input
            data-testid="form-input"
            type="text"
            onChange={(e) => setNewCompany(e.target.value)}
            placeholder="Search by name"
          />
          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#fff" size={14} />
            ) : (
              <FaSearch color="#fff" size={14} />
            )}
          </SubmitButton>
        </Form>
      </Container>

      {companies.bestMatches && <CompanyList list={companies.bestMatches} />}
    </>
  );
}
