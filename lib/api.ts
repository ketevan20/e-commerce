const BASE = 'https://www.greatfrontend.com/api/projects/challenges/e-commerce'

function buildUrl(path: string, params: any = {}) {
    const clean = Object.fromEntries(
        Object.entries(params)
            .filter(([_, v]) => v != null && v !== '')
            .map(([k, v]) => [k, String(v)])
    ) as Record<string, string>;
    const qs = new URLSearchParams(clean).toString();
    return `${BASE}${path}${qs ? '?' + qs : ''}`;
}

export async function getProducts(params: any = {}) {
    const res = await fetch(buildUrl('/products', params), {
        next: { revalidate: 60 }
    })
    if(!res.ok) throw new Error('Failed to fetch products');
    return res.json();
}

export async function getProduct(id: string) {
    const res = await fetch(buildUrl(`/products/${id}`), {
        next: { revalidate: 60 }
    })
    if(!res.ok) throw new Error(`Product not found: ${id}`);
    return res.json();
}

export async function getProductReviews(id: string, params: any = {}) {
    const res = await fetch(buildUrl(`/products/${id}/reviews`, params), {
        next: { revalidate: 60 }
    })
    if(!res.ok) throw new Error(`Reviews not found for product: ${id}`);
    return res.json();
}

export async function getCategories() {
    const res = await fetch(`${BASE}/categories`, {
        next: { revalidate: 60 }
    })
    if(!res.ok) throw new Error('Failed to fetch categories');
    return res.json();  
}

export async function getCollections() {
    const res = await fetch(BASE + '/collections', {
        next: { revalidate: 60 }
    })
    if(!res.ok) throw new Error('Failed to fetch collections');
    return res.json();  
}