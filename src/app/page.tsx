'use client';

import './page.scss';
import {memo, useContext, useEffect} from 'react';
import {User} from '@/interfaces/user.interface';
import {UserCard} from '@/components/UserCard';
import {Title} from '@/components/Title';
import {Preloader} from '@/components/Preloader';
import {useSideEffectState} from '@/hooks/useSideEffectState';
import {SortingContext} from '@/context';

const  Home = () => {
  const {sorting} = useContext(SortingContext);
  const {
    data: users,
    loading,
    error
  } = useSideEffectState('https://jsonplaceholder.typicode.com/users', sorting);
 
  useEffect(() => {
    console.log('render home page', sorting);    
  },[])

  useEffect(() => {
    console.log('sorting change on home page', sorting);
    
  },[sorting])

  if(!users && !loading) return null;

  if(loading) return <Preloader/>
 
  return (
    <main className="page-wrapper">
     <Title> Сприсок пользователей</Title>
     {error && <h3>Произошла ошибка загрузки списка пользователей</h3>}

     {(!error) && 
     <ul className='list-wrapper flex-container column'>
      {Array.isArray(users) && users.map((user: User, index: number)=> (
        <UserCard key={index} user={user}/>
      ))}
     </ul>
     }
    </main>
  );
}


export default memo(Home);