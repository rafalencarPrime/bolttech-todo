
import { useEffect, useState, useCallback } from 'react';
import ProjectService from '../services/ProjectService.js';

const useProjects = () => {
    
    const [projects, setProjects] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const loadData = useCallback(async () => {

        try {
            setLoaded(false);

            const projects = await ProjectService.getProjects();
            setProjects(projects);
        }
        finally {
            setLoaded(true);
        }
    }, [])

    useEffect(() => { loadData() }, [loadData]);

    const reload = () => {
        loadData();
    }

    return [projects, loaded, reload];
}

export default useProjects;