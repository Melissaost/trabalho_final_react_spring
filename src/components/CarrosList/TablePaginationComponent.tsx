import React from 'react';
import { TablePagination } from '@mui/material';

interface TablePaginationComponentProps {
    count: number;
    page: number;
    limit: number;
    handlePageChange: (event: unknown, newPage: number) => void;
    handleLimitChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TablePaginationComponent: React.FC<TablePaginationComponentProps> = ({ count, page, limit, handlePageChange, handleLimitChange }) => {
    return (
        <TablePagination
            component="div"
            count={count}
            page={page}
            rowsPerPage={limit}
            onRowsPerPageChange={handleLimitChange}
            onPageChange={handlePageChange}
            rowsPerPageOptions={[5, 10, 25, 50, 70]}
        />
    );
};

export default TablePaginationComponent;