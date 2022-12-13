import React from 'react';
import { useForm } from 'react-hook-form';

import { ErrorTextMessage } from 'components/ErrorTextMessage/ErrorTextMessage';
import { CreateEl } from 'types/types';
import { useCreateNoteMutation } from 'store/notesApi/notesListApi';

import './ModalCreateEl.scss';

interface ICreateElForm {
  title: string;
  description: string;
  onHideModal: () => void;
}

export function ModalCreateEl({ title, description, onHideModal }: ICreateElForm) {
  const [addNote] = useCreateNoteMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateEl>();

  const onSubmitHandler = (data: CreateEl) => {
    onHideModal();
    addNote({ title: data.title, description: data.description });
  };

  return (
    <form className="sign-in-form" onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="form-group">
        <label className="d-flex flex-column form__label">
          <span>{title}:</span>
          <input
            className="form__input"
            type="text"
            autoFocus
            {...register('title', {
              required: {
                value: true,
                message: 'Note title required!',
              },
              minLength: {
                value: 2,
                message: 'Note title must contain more than 1 letter!',
              },
              maxLength: {
                value: 15,
                message: 'Note title must contain less than 15 letters!',
              },
            })}
          />
        </label>
        <div className="form__error">
          {errors.title && <ErrorTextMessage error={errors.title.message} />}
        </div>
      </div>

      <div className="form-group">
        <label className="d-flex flex-column form__label">
          <span>{description}:</span>
          <input
            className="form__input"
            type="text"
            {...register('description', {
              required: {
                value: true,
                message: 'Note description required!',
              },
              minLength: {
                value: 2,
                message: 'Note description must contain more than 1 letter!',
              },
            })}
          />
        </label>
        <div className="form__error">
          {errors.description && <ErrorTextMessage error={errors.description.message} />}
        </div>
      </div>

      <button
        type="submit"
        style={{ width: '10rem', margin: '2rem auto 1rem auto', display: 'block' }}
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
}
