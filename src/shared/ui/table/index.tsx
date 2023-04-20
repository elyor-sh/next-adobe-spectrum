import React from 'react';
import cl from './style.module.scss';

export const enum TableColumnType {
    STRING = 'STRING',
    ACTION = 'ACTION',
}

export type TableColumnsType<T> = {
    uuid: React.Key;
    title: React.ReactNode;
    rowKey: keyof T | null;
    type: TableColumnType;
    action?: (row: T, column: TableColumnsType<T>) => React.ReactNode;
};

export type TableDataInterface<IData> = {
    id: React.Key;
    [key: keyof IData]: string | number | null | undefined | boolean;
};

export type TableData<IData> = {
    data: TableDataInterface<IData>[];
    columns: TableColumnsType<IData>[];
};

function drawColumn<RowT, ColumnT>(
    row: TableDataInterface<RowT>,
    column: TableColumnsType<ColumnT>
) {
    switch (column.type) {
        case TableColumnType.STRING: // когда нужно подставить простую строку
            return column.rowKey ? row[column.rowKey] : <></>;
        case TableColumnType.ACTION: // когда нужен сложный экшн (рисуется снаружи)
            return column.action ? column.action(row, column) : <></>;
        default:
            return null;
    }
}

const Table = <IData extends object>({ data, columns }: TableData<IData>) => {
    return (
        <>
            <div className={cl['table-wrapper']}>
                <table className={cl['fl-table']}>
                    <thead>
                        <tr>
                            {columns.map((col) => (
                                <th key={col.uuid}>{col.title}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => (
                            <tr key={row.id}>
                                {columns.map((col) => (
                                    <td key={col.uuid}>
                                        {drawColumn<typeof row, typeof col>(
                                            row,
                                            col
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export { Table };
