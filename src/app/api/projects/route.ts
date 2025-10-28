import { NextResponse } from 'next/server';
import { getAllProjects } from '@/lib/github';
import manualProjectsData from '@/data/projects.json';
import { Project } from '@/types';

export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  try {
    const manualProjects = manualProjectsData as unknown as Project[];
    const projects = await getAllProjects(manualProjects);
    
    return NextResponse.json({ 
      projects,
      lastUpdated: new Date().toISOString(),
      count: projects.length,
    });
  } catch (error) {
    console.error('Error in projects API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}
