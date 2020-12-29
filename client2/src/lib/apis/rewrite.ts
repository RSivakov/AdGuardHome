import RewriteEntry, { IRewriteEntry } from 'Entities/RewriteEntry';

// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export default class RewriteApi {
    static async rewriteAdd(rewriteentry: IRewriteEntry): Promise<number | string[] | Error> {
        const haveError: string[] = [];
        const rewriteentryValid = new RewriteEntry(rewriteentry);
        haveError.push(...rewriteentryValid.validate());
        if (haveError.length > 0) {
            return Promise.resolve(haveError);
        }
        return await fetch(`/control/rewrite/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(rewriteentryValid.serialize()),
        }).then(async (res) => {
            if (res.status === 200) {
                return res.status;
            } else {
                return new Error(String(res.status));
            }
        })
    }

    static async rewriteDelete(rewriteentry: IRewriteEntry): Promise<number | string[] | Error> {
        const haveError: string[] = [];
        const rewriteentryValid = new RewriteEntry(rewriteentry);
        haveError.push(...rewriteentryValid.validate());
        if (haveError.length > 0) {
            return Promise.resolve(haveError);
        }
        return await fetch(`/control/rewrite/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(rewriteentryValid.serialize()),
        }).then(async (res) => {
            if (res.status === 200) {
                return res.status;
            } else {
                return new Error(String(res.status));
            }
        })
    }

    static async rewriteList(): Promise<IRewriteEntry[] | Error> {
        return await fetch(`/control/rewrite/list`, {
            method: 'GET',
        }).then(async (res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                return new Error(String(res.status));
            }
        })
    }
}
