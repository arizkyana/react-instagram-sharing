import React from 'react';
import { useParams } from 'react-router-dom';

import MainLayout from '../../../layouts/main';

function PageDetailTicket() {
  const { id } = useParams() as { id: string };
  return (
    <MainLayout>
      <div>
        <h1>Detail Ticket</h1>
        <p>
          params: {id}
        </p>
      </div>
    </MainLayout>
  )
}

export default PageDetailTicket;
