import React from 'react';
import { Router } from '@reach/router';
import { Countries } from './countries';

export default function Pages() {
  return (
    <Router>
      <Countries path="/" />
    </Router>
  );
}
