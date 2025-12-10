import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';

interface UserItem {
  avatar: string;
  description: string;
  title: string;
  role?: string;
}

export default function Contributor() {
  const items: UserItem[] = [
    {
      avatar: 'https://avatars.githubusercontent.com/u/7106201?v=4',
      description: 'https://github.com/EbadiDev',
      title: 'EbadiDev',
      role: 'Lead Developer',
    },
    {
      avatar: 'https://avatars.githubusercontent.com/u/84221153?v=4',
      description: 'https://github.com/YasinDev-code',
      title: 'YasinDev-code',
      role: 'Developer',
    },
  ];

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Development Team</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto'>
        {items.map((item, index) => (
          <Card key={index} className='overflow-hidden transition-all duration-300 hover:shadow-lg'>
            <CardContent className='p-0'>
              <div className='flex items-center space-x-4 p-4 bg-primary text-primary-foreground'>
                <Avatar className='h-16 w-16 border-2 border-background'>
                  <AvatarImage src={item.avatar} alt={item.title} />
                  <AvatarFallback className='text-lg bg-secondary text-secondary-foreground'>
                    {item.title.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className='text-lg font-semibold'>{item.title}</h2>
                  <p className='text-sm opacity-90'>{item.role || 'Developer'}</p>
                </div>
              </div>
              <div className='p-4 flex justify-between items-center bg-card text-card-foreground'>
                <Link
                  href={item.description}
                  className='text-sm text-primary hover:text-primary/80 transition-colors duration-200 flex items-center space-x-2'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Github className='h-4 w-4' />
                  <span>View Profile</span>
                </Link>
                <Button
                  variant='ghost'
                  size='icon'
                  className='text-muted-foreground hover:text-foreground'
                >
                  <MoreHorizontal className='h-5 w-5' />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
