"use client"
import Image from 'next/image';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation';

import FormField from './FormField';
import Button from './Button';
import CustomMenu from './CustomMenu';
import { categoryFilters } from '@/constant';
import { updateProject, createNewProject, fetchToken } from '@/lib/actions';
import { FormState, ProjectInterface, SessionInterface } from '@/common.types';

type Props = {
  type: string;
  session: SessionInterface;
  // project?: ProjectInterface;
};

const [form, setForm] = useState<FormState>({
  title: project?.title || "",
  description: project?.description || "",
  image: project?.image || "",
  liveSiteUrl: project?.liveSiteUrl || "",
  githubUrl: project?.githubUrl || "",
  category: project?.category || ""
});

const handleFormSubmit = async (e: FormEvent) => {
}

const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {}

const ProjectForm = ({ type, session }: Props) => {
  return
      <form
            onSubmit={handleFormSubmit}
            className="flexStart form">
            <div className="flexStart form_image-container">
                <label htmlFor="poster" className="flexCenter form_image-label">
                    {!form.image && 'Choose a poster for your project'}
                </label>
                <input
                    id="image"
                    type="file"
                    accept='image/*'
                    required={type === "create" ? true : false}
                    className="form_image-input"
                    onChange={(e) => handleChangeImage(e)}
                />
                {form.image && (
                    <Image
                        src={form?.image}
                        className="sm:p-10 object-contain z-20" alt="image"
                        fill
                    />
                )}
            </div>

            <FormField
                title="Title"
                state={form.title}
                placeholder="Flexibble"
                setState={(value) => handleStateChange('title', value)}
            />
            </form>
            
};

export default ProjectForm;
