import React from 'react';
import { TablePagination } from '@mui/material';

interface TablePaginationComponentProps {
    count: number;
    page: number;
    limit: number;
    handlePageChange: (event: unknown, newPage: number) => void;
    handleLimitChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    rowsPerPageOptions: number[];
}

const TablePaginationComponent: React.FC<TablePaginationComponentProps> = ({ count, page, limit, handlePageChange, handleLimitChange, rowsPerPageOptions }) => {
    return (
        <TablePagination
            component="div"
            count={count}
            page={page}
            rowsPerPage={limit}
            onRowsPerPageChange={handleLimitChange}
            onPageChange={handlePageChange}
            rowsPerPageOptions={rowsPerPageOptions}
            disabled={rowsPerPageOptions.length === 1}
        />
    );
};

export default TablePaginationComponent;