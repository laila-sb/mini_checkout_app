// export type FormData = {
//   email: string;
//   name: string;
//   address: string;
// };

export const STEPS = {
    DETAILS: 0,
    REVIEW: 1,
    SUBMIT: 2,
    SUCCESS: 3
} as const;

export type Step = 0 | 1 | 2 | 3;

