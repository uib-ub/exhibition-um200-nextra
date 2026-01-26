import { 
    CardDescription,
    CardHeader, 
    CardTitle, 
    Card as ShadcnCard 
} from '@/components/ui/card';
import Link from 'next/link';

export default function Card({image, href, alt, title, children}: {
    image?: string, 
    href: string,
    alt?: string, 
    title?: string, 
    children?: React.ReactNode}) {
    return (
        <ShadcnCard className='relative mx-auto w-full max-w-xs pt-5'>
            <Link href={href}>
                <img 
                    src={image || 'middelalderforum_2026_header_0.jpg'} 
                    alt={alt || 'An image.'} 
                    className='relative z-20 aspect-video w-full min-w-60 object-cover brightness-100 dark:brightness-40'
                />
            </Link>
            <CardHeader>
                <CardTitle>
                    <Link href={href}>{title || ''}</Link>
                </CardTitle>
                <CardDescription>{children}</CardDescription>
            </CardHeader>
        </ShadcnCard>
    );
}

export function Cards({cols, children}: {cols?: number, children: React.ReactNode}) {
    return (
        <div className='flex justify-center'>
            <div className={`shrink mt-15 grid grid-cols-${cols || 3} gap-8`}>{children}</div>
        </div>
    );
}