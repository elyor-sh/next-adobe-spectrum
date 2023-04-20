type ClassNamesType = Record<string, unknown>;

/**
 * @description - Служить для склеивания классов
 *
 */

export const cn = (
    ...rest: Array<ClassNamesType | null | undefined | string>
) => {
    return rest
        .map((r) => {
            if (!r) {
                return '';
            }

            if (r && typeof r === 'object') {
                const obj = Object.keys(r).reduce((acc: string[], cur) => {
                    if (Boolean(r[cur])) {
                        return [...acc, cur];
                    }

                    return acc;
                }, []);

                if (obj) return obj.join(' ');

                return '';
            }

            return r;
        })
        .join(' ');
};
