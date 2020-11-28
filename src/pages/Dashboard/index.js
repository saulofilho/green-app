import React, { useState, useMemo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import { Container } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <h1>dash</h1>
    </Container>
  );
}
