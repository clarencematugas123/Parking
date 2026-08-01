import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
//import { Label } from '@/components/ui/label';
import { dashboard } from '@/routes';
import { useForm } from '@inertiajs/react';

export default function Dashboard() {
    const form = useForm({student: "", 'license plate': "", vehicle: ""});

    function submit(event: React.FormEvent<HTMLFormElement>) {  
        event.preventDefault();
        form.post('/student', {
            onSuccess: () => form.reset(),
        });
    }
    return (
        <>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div>
                    <h1 className="text-xl font-semibold">Products</h1>
                    <p className="text-sm text-muted-foreground">
                        Add a new student
                    </p>
                    </div>

                    <form onSubmit={submit} className="max-w-X1 space-y-4 rounded-xl border p-4">
                        <div className="space-y-2">
                        <Label htmlFor="student">Student</Label>
                        <Input
                            id="student"
                            value={form.data.student}
                            onChange={(event) => form.setData('student', event.target.value)}
                            />
                            {form.errors.student && <p className="text-sm text-red-600">{form.errors.student}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="license">License</Label>
                            <Input
                                id="license plate"
                                value={form.data['license plate']}
                                onChange={(event) => form.setData('license plate', event.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                        <label htmlFor="vehicle">Vehicle</label>
                        <Input
                            id="vehicle"
                            value={form.data.vehicle}
                            onChange={(event) => form.setData('vehicle', event.target.value)}
                        />
                        {form.errors.vehicle && <p className="text-sm text-red-600">{form.errors.vehicle}</p>}          
                        </div>
                        <Button type="submit" disabled={form.processing}>
                            Save Student
                        </Button>
                    </form>                   
                {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div> */}
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
