import data from './ExamData.json';

export const getDataForLevel = (level) => {
    return data.filter(row => row.level === level);
}