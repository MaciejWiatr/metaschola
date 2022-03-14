import tw from 'twin.macro';

export const TableWrapper = tw.div`
rounded-lg bg-white overflow-x-auto
dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50
`;

export const Table = tw.table`
text-gray-700 dark:text-gray-100
`;

export const TH = tw.th`
p-2 py-1 border-r-2 dark:border-gray-700
dark:text-gray-100
`;

export const THNoBorder = tw.th`
p-2 py-1 dark:text-gray-100`;

export const TDLight = tw.td`
p-2 py-1 border-2 bg-gray-100 bg-opacity-50 dark:bg-opacity-50 dark:bg-gray-800 dark:border-gray-700`;

export const TD = tw.td`
p-2 py-1 border-2 dark:border-gray-700
`;

export const Thead = tw.thead`
text-gray-700`;

export const TBody = tw.tbody`
text-center`;
