"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { User } from "@/interfaces/user.interface";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import { Preloader } from "@/components/Preloader";
import { ProfileForm } from "@/components/ProfileForm";
import { useSideEffectState } from "@/hooks/useSideEffectState";

export default function Profile() {
  const { id } = useParams();

  const { data, loading, error } = useSideEffectState(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = data as User;

  const [isActive, setIsActive] = useState<boolean>(false);

  if (!user && !loading) return null;

  if (loading) return <Preloader />;

  return (
    <main className="page-wrapper">
      <div className="flex-container row space-between align-baseline">
        <Title>Профиль пользователя</Title>
        <Button disabled={false} handleClick={() => setIsActive(!isActive)}>
          Редактировать
        </Button>
      </div>
      <ProfileForm user={user} isActive={isActive}/>
    </main>
  );
}
