import React from 'react';

const EmptyContainer: React.FC = () => {
  return (
    <div className='min-h-[calc(100vh-150px)] flex flex-col items-center justify-center bg-face-flushed bg-no-repeat bg-center'>
      <p className='text-slate-500'>Não há itens disponíveis.</p>
    </div>
  );
};

export default EmptyContainer;