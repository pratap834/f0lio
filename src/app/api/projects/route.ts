import { NextResponse } from 'next/server';
import { getAllProjects } from '@/lib/github';
import manualProjectsData from '@/data/projects.json';
import { Project } from '@/types';

export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  const manualProjects = manualProjectsData as unknown as Project[];

  try {
    const projects = await getAllProjects(manualProjects);
    
    return NextResponse.json({ 
      projects,
      lastUpdated: new Date().toISOString(),
      count: projects.length,
    });
  } catch (error) {
    console.warn('Error in projects API, returning manual projects fallback:', error);
    return NextResponse.json({
      projects: manualProjects,
      lastUpdated: new Date().toISOString(),
      count: manualProjects.length,
      fallback: true,
    });
  }
}
