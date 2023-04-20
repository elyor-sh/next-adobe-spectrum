import React from 'react';
import cl from './style.module.scss';

export const enum TableColumnType {
    STRING = 'STRING',
    ACTION = 'ACTION',
}

export type TableColumnsType<T extends object> = {
    uuid: React.Key;
    title: React.ReactNode;
    rowKey: keyof T | null;
    type: TableColumnType;
    action?: (
        row: TableDataInterface<T>,
        column: TableColumnsType<T>
    ) => React.ReactNode;
    onColumnClick?: (column: TableColumnsType<T>) => void;
};

export type TableDataInterface<IData extends object> = {
    [key in keyof IData]: IData[key];
} & {
    id: string;
};

export type TableData<IData extends object> = {
    data: TableDataInterface<IData>[];
    columns: TableColumnsType<IData>[];
};

function drawColumn<RowT extends object>(
    row: TableDataInterface<RowT>,
    column: TableColumnsType<RowT>
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
                                <th
                                    key={col.uuid}
                                    onClick={() => col.onColumnClick?.(col)}
                                >
                                    {col.title}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => (
                            <tr key={row.id}>
                                {columns.map((col) => (
                                    <td key={col.uuid}>
                                        {
                                            drawColumn(
                                                row,
                                                col
                                            ) as unknown as React.ReactNode
                                        }
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
